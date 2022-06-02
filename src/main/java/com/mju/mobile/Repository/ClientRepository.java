package com.mju.mobile.Repository;

import com.mju.mobile.Model.Client.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, String> {
    public Optional<Client> findById (@Param("id") String id);

    @Query(value = "UPDATE Client SET email = :email WHERE id = :id", nativeQuery = true)
    public void updateEmail(@Param("id") String id, @Param("email") String email);

    @Query(value = "UPDATE Client SET password = :password WHERE id = :id", nativeQuery = true)
    public void updatePassword(@Param("id") String id, @Param("password") String password);
}
