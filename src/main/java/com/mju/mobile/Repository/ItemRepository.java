package com.mju.mobile.Repository;

import com.mju.mobile.Model.Item.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ItemRepository  extends JpaRepository<Item, Integer> {
    @Query(value = "SELECT * FROM Item WHERE ownerId = :clientId", nativeQuery = true)
    public List<Item> getWritten(@Param("clientId") String clientId);

    @Query(value = "INSERT INTO Recommendation(clientId, itemId) VALUES (:clientId, :itemId)", nativeQuery = true)
    public void recommendation(@Param("clientId") String clientId,@Param("itemId") int itemId);

    @Query(value = "SELECT id FROM Item WHERE ownerId = :ownerId AND title = :title", nativeQuery = true)
    public Optional<Integer>  getItemId(@Param("ownerId")String ownerId, @Param("title")String title);
}
