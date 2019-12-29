package com.onwelo.workshop.keycloak.cellarstorage.repositories

import com.onwelo.workshop.keycloak.cellarstorage.model.Preserve
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "preservatives", path = "preservatives")
interface PreservativeRepository : PagingAndSortingRepository<Preserve, Long>