package com.auction.server.repositories;

import com.auction.server.entities.AdminInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Repository(value = "admin-info-repo")
public interface AdminInfoRepo  extends CrudRepository<AdminInfo, String> {
    public AdminInfo findByWorkid(String workid);
}
