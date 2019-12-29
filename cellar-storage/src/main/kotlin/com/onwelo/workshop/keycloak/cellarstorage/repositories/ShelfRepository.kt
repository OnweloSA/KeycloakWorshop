package com.onwelo.workshop.keycloak.cellarstorage.repositories

import com.onwelo.workshop.keycloak.cellarstorage.model.Shelf
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "shelfs", path = "shelfs")
interface ShelfRepository : PagingAndSortingRepository<Shelf, Long>