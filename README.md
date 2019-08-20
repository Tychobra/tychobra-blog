# tychobra-blog

tychobra blogdown website

### development

Serve the static site for development using:

```
# R

blogdown::serve_site()
```

Every once ina while you might run into errors and need to rebuild the site from scratch.  To do this simply delete the "public/" directory and run:

```
# R

blogdown::build_site()
```


### File Organization

 - "layouts/" - contains the html for the website
 - "content/posts/" - contains the markdown documents used to generate the blog posts
 

