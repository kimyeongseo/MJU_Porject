package com.mju.mobile.Service.Client;

import com.mju.mobile.Model.Client.Client;

public interface ClientService {
    public Client findById(String id);
    public void signUp(Client client);
    public void updateEmail(String id, String email);
    public void updatePassword(String id, String password);
}
