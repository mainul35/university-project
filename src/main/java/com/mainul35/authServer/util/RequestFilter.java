package com.mainul35.authServer.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.Date;

@Component
public class RequestFilter implements Filter {
    BufferedReader in;
    PrintWriter out;
    public final String CRLF = "\r\n";
    @Autowired
    private RequestMappingHandlerMapping handlerMapping;

    public ModelAndView modelAndView() {
        return new ModelAndView();
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        filterChain.doFilter(servletRequest, servletResponse);
        HttpServletRequest request = ((HttpServletRequest)servletRequest);
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        in = new BufferedReader(new InputStreamReader(request.getInputStream()));
        out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(response.getOutputStream())), true);
        String url = ((HttpServletRequest)servletRequest).getRequestURL().toString();
        String queryString = ((HttpServletRequest)servletRequest).getQueryString();
        if (!url.matches(".*(css|js).*")) {
//            handlerMapping.getHandlerMethods().entrySet().forEach(e->{
//                if (!e.getKey().getPatternsCondition().getPatterns().toArray()[0].equals("url")) {
//                    try {
//                        String htmlFile = "";
//                        processRequest(htmlFile);
//                        closeConnection();
//                        return;
//                    } catch (IOException e1) {
//                        e1.printStackTrace();
//                    }
//                }
//            });
        }
    }

    private void closeConnection() throws IOException {
        try {
            out.close();
            in.close();
        }catch(Exception e){

        }
    }

    private void processRequest(String htmlFile) {
        File file = new File(htmlFile);
        if (!file.exists()) {
            out.print("HTTP/1.1 404 Not Found" + CRLF);
            Date date = new Date();
            out.print("Date: " + date.toString() + CRLF);
            out.print("Connection: close" + CRLF);
            out.print("Content-Type: text/html;charset=iso-8859-1" + CRLF);
            out.print("<html><head><title>404 Not Found<title></head><body><h1>Could not find the requested page</h1>");
            out.print("</body></html>" + CRLF);
        }
    }

    @Override
    public void destroy() {
    }
}
