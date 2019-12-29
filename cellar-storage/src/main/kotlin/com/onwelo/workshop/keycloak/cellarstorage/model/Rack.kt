package com.onwelo.workshop.keycloak.cellarstorage.model

import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "racks")
class Rack(
        id: Long,
        version: Long = 0,
        created: LocalDateTime? = null,
        updated: LocalDateTime? = null,

        @Column(name = "name")
        var name: String,

        @Column(name = "description", nullable = false)
        var description: String?,

        @OneToMany(mappedBy = "rack")
        var shelfs: Set<Shelf> = mutableSetOf()
) : AbstractModel(id, version, created, updated)