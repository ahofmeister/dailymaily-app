package org.dailymaily.ping;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class PingResourceTest {

    @Test
    public void testPingEndpoint() {
        given()
          .when().get("/ping")
          .then()
             .statusCode(200)
             .body(is("ping"));
    }

}
