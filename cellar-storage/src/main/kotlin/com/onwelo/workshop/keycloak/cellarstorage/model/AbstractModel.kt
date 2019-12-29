package com.onwelo.workshop.keycloak.cellarstorage.model

import java.io.Serializable
import javax.persistence.*


@MappedSuperclass
abstract class AbstractModel(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id", nullable = false)
        var id: Long? = null,

        @Version
        var version: Long = 0
) : Serializable