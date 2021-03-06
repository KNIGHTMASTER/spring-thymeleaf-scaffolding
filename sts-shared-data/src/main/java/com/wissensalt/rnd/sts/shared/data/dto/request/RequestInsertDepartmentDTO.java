package com.wissensalt.rnd.sts.shared.data.dto.request;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * Created on 1/23/19.
 *
 * @author <a href="mailto:fauzi.knightmaster.achmad@gmail.com">Achmad Fauzi</a>
 */
@Getter
@Setter
public class RequestInsertDepartmentDTO implements Serializable {
    private String code;
    private String name;
    private String remarks;
    private Boolean status;
}
