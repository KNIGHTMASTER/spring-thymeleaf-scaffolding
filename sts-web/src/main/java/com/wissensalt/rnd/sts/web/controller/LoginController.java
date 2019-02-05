package com.wissensalt.rnd.sts.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created on 1/21/19.
 *
 * @author <a href="mailto:fauzi.knightmaster.achmad@gmail.com">Achmad Fauzi</a>
 */
@Controller
public class LoginController implements ISimplePage {

    @GetMapping("/login")
    @Override
    public String display(Model p_Model, HttpServletRequest p_HttpServletRequest) {
        return "/page/login";
    }
}
