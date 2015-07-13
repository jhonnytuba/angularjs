package com.jhonatanserafim.angularjs.rest;

import java.util.Arrays;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.jhonatanserafim.angularjs.entity.Status;

@Path("status")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class StatusRest {
    
    @GET
    public List<Status> listaStatus() {
        return Arrays.asList(Status.values());
    }
	
}