package com.onwelo.workshop.keycloak.cellarstorage.repositories

import com.onwelo.workshop.keycloak.cellarstorage.model.Rack
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "racks", path = "racks")
interface RackRepository : PagingAndSortingRepository<Rack, Long>