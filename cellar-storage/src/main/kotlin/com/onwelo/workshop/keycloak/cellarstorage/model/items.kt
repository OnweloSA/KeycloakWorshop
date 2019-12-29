package com.onwelo.workshop.keycloak.cellarstorage.model

import java.time.LocalDate
import javax.persistence.*

enum class Type {
    JAM, TINCTURE, ENSILAGE, SALAD, SAUCE
}

@Entity
@Table(name = "preserves")
class Preserve(
        id: Long,
        version: Long = 0,

        @Column(name = "name", nullable = false, unique = true)
        var name: String,

        @Enumerated(EnumType.STRING)
        @Column(name = "type", nullable = false)
        var type: Type,

        @Column(name = "expiration_date")
        var expirationDate: LocalDate,

        @Column(name = "description")
        var description: String?,

        @ManyToOne
        @JoinColumn(name = "shelf_id", nullable = false)
        var shelf: Shelf
) : AbstractModel(id, version)