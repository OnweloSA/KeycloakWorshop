package com.onwelo.workshop.keycloak.cellarstorage.services

import org.keycloak.KeycloakPrincipal
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken
import org.keycloak.representations.AccessToken
import org.springframework.context.annotation.Scope
import org.springframework.context.annotation.ScopedProxyMode
import org.springframework.stereotype.Service
import org.springframework.web.context.WebApplicationContext
import javax.servlet.http.HttpServletRequest


internal interface ContextService {
    fun accessToken(): AccessToken

    fun getUserMail(): String
}

@Service
@Scope(scopeName = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.INTERFACES)
internal class ContextServiceImpl (
        private val request: HttpServletRequest
) : ContextService {

    override fun accessToken(): AccessToken {
        val token = request.userPrincipal
        if (token is KeycloakAuthenticationToken) {
            val principal = token.principal
            if (principal is KeycloakPrincipal<*>) {
                val context = principal.keycloakSecurityContext
                return context?.token ?: throw SecurityException("Not token available!")
            }
        }

        throw SecurityException("Not token available!")
    }

    override fun getUserMail(): String {
        return accessToken().email
    }
}
