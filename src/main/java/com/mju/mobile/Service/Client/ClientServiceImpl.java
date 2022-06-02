package com.mju.mobile.Service.Client;

import com.mju.mobile.Exception.Auth.ClientNotFoundException;
import com.mju.mobile.Exception.Client.AlreadyExistClientException;
import com.mju.mobile.Model.Client.Client;
import com.mju.mobile.Repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements ClientService{

    private final ClientRepository clientRepository;

    @Override
    public Client findById(String id) {
        Client client = clientRepository.findById(id).orElseThrow(ClientNotFoundException::new);
        return client;
    }

    @Override
    public void signUp(Client client) {
        Optional<Client> temp = clientRepository.findById(client.getId());
        if(temp == null) {
            clientRepository.save(client);
        } else {
            throw new AlreadyExistClientException();
        }
    }

    @Override
    public void updateEmail(String id, String email) {
        clientRepository.updateEmail(id, email);
    }

    @Override
    public void updatePassword(String id, String password) {
        clientRepository.updatePassword(id, password);
    }
}
