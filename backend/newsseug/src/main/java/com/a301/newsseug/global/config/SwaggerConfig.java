package com.a301.newsseug.global.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {


    @Bean
    public OpenAPI customOpenAPI() {

        return new OpenAPI()
                .info(apiInfo());

    }

    private Info apiInfo() {
        return new Info()
                .title("뉴쓱 API")
                .description("뉴쓱 API 명세서입니다.")
                .version("v1");
    }

}
