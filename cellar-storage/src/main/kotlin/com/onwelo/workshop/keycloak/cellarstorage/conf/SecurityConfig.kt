package com.onwelo.workshop.keycloak.cellarstorage.conf

import org.keycloak.adapters.KeycloakConfigResolver
import org.keycloak.adapters.KeycloakDeployment
import org.keycloak.adapters.KeycloakDeploymentBuilder
import org.keycloak.adapters.spi.HttpFacade
import org.keycloak.adapters.springsecurity.KeycloakSecurityComponents
import org.keycloak.adapters.springsecurity.config.KeycloakWebSecurityConfigurerAdapter
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.web.authentication.session.NullAuthenticatedSessionStrategy
import org.springframework.security.web.authentication.session.SessionAuthenticationStrategy


@Configuration
@EnableWebSecurity
@ComponentScan(basePackageClasses =  [KeycloakSecurityComponents::class])
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
class SecurityConfig(
    @Value("\${keycloak.filename}")
    private val keycloakFilename: String
) : KeycloakWebSecurityConfigurerAdapter() {

    @Autowired
    private fun configureGlobal(auth: AuthenticationManagerBuilder) {
        auth.authenticationProvider(keycloakAuthenticationProvider())
    }

    @Bean
    override fun sessionAuthenticationStrategy(): SessionAuthenticationStrategy {
        return NullAuthenticatedSessionStrategy()
    }

    @Bean
    fun keycloakConfigResolver(): KeycloakConfigResolver {
        return PathBasedKeycloakConfigResolver(keycloakFilename)
    }

    override fun configure(http: HttpSecurity?) {
        super.configure(http)
        http?.authorizeRequests()?.antMatchers("/")?.permitAll()
        http?.sessionManagement()?.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        http?.csrf()?.disable() // do usuniecia jesli sie da -> teoretycznie
    }

}

internal class PathBasedKeycloakConfigResolver(
        private val keycloakFilename: String
) : KeycloakConfigResolver {

    override fun resolve(facade: HttpFacade.Request?): KeycloakDeployment {
        val confFile = SecurityConfig::class.java.classLoader.getResourceAsStream(keycloakFilename)!!
        return KeycloakDeploymentBuilder.build(confFile)
    }

}