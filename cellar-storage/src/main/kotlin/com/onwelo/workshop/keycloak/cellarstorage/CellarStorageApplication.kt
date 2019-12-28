package com.onwelo.workshop.keycloak.cellarstorage

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class CellarStorageApplication

fun main(args: Array<String>) {
	runApplication<CellarStorageApplication>(*args)
}
