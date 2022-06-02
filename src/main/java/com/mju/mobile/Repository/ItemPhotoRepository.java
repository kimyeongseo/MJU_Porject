package com.mju.mobile.Repository;

import com.mju.mobile.Model.Item.ItemPhoto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemPhotoRepository extends JpaRepository<ItemPhoto, String> {

}
