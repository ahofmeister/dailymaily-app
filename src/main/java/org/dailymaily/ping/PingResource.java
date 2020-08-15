package org.dailymaily.ping;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.eclipse.microprofile.config.ConfigProvider;

@Path("meta")
public class PingResource {

  @GET
  @Produces(MediaType.TEXT_PLAIN)
  @Path("ping")
  public String ping() {
    return "ping";
  }

  @GET
  @Produces(MediaType.TEXT_PLAIN)
  @Path("version")
  public String version() {
    return ConfigProvider.getConfig().getValue("quarkus.application.version", String.class);
  }
}
