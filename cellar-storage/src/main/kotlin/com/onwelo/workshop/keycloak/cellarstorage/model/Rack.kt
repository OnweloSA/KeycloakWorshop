package com.onwelo.workshop.keycloak.cellarstorage.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "racks")
class Rack(
        id: Long,
        version: Long = 0,

        @Column(name = "name", nullable = false, unique = true)
        var name: String,

        @Column(name = "description")
        var description: String?,

        @OneToMany(mappedBy = "rack")
        var shelfs: Set<Shelf> = mutableSetOf()
) : AbstractModel(id, version)