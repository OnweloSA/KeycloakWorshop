package com.onwelo.workshop.keycloak.cellarstorage.repositories

import com.onwelo.workshop.keycloak.cellarstorage.model.Preserve
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.web.bind.annotation.CrossOrigin

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "preserves", path = "preserves")
interface PreservativeRepository : PagingAndSortingRepository<Preserve, Long>