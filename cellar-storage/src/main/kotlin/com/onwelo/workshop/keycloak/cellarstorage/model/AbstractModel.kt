package com.onwelo.workshop.keycloak.cellarstorage.model

import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.io.Serializable
import java.time.LocalDateTime
import javax.persistence.*


@EntityListeners(AuditingEntityListener::class)
@MappedSuperclass
abstract class AbstractModel(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id", nullable = false)
        var id: Long? = null,

        @Version
        var version: Long = 0,

        @Column(name = "created_date")
        @CreatedDate
        var created: LocalDateTime? = null,

        @Column(name = "modified_date")
        @LastModifiedDate
        var updated: LocalDateTime? = null

) : Serializable