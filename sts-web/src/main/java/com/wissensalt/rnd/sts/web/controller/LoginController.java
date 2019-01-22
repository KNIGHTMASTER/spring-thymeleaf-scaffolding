package com.wissensalt.rnd.sts.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created on 1/21/19.
 *
 * @author <a href="mailto:fauzi.knightmaster.achmad@gmail.com">Achmad Fauzi</a>
 */
@Controller
public class LoginController implements ISimplePage {

    @GetMapping("/login")
    @Override
    public String display(Model p_Model) {
        return "/page/login";
    }
}
