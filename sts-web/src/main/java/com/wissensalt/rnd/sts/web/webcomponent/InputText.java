package com.wissensalt.rnd.sts.web.webcomponent;


import lombok.*;

import java.io.Serializable;

/**
 * Created on 1/29/19.
 *
 * @author <a href="mailto:fauzi.knightmaster.achmad@gmail.com">Achmad Fauzi</a>
 */
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InputText implements Serializable {

    @Builder.Default
    private String type = "text";
    private String id;
    private String className;
    private String placeHolder;
    private Boolean required;
    private String fieldName;
}
