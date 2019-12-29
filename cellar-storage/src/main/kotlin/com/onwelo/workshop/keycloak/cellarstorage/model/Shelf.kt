package com.onwelo.workshop.keycloak.cellarstorage.model

import javax.persistence.*

@Entity
@Table(name = "shelfs")
class Shelf(
        id: Long,
        version: Long = 0,

        @Column(name = "name", nullable = false, unique = true)
        var name: String,

        @Column(name = "description")
        var description: String?,

        @ManyToOne
        @JoinColumn(name = "rack_id", nullable = false)
        val rack: Rack,

        @OneToMany(mappedBy = "shelf")
        var preserves: Set<Preserve>?
) : AbstractModel(id, version)