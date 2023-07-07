<h1 align="left">Holla Amigos !</h1>

Holla!
I'am Kresna. In this digital era, technology industry always evolving. From static to dynamic, from desktop to mobile. Why mobile?
Because people nowadays always carry their mobile phone. That's why responsive design in this digital era is important to uplifting and improve engagement for entrepreneur. 

The purpose of this website is inform people or hiker about official track for several mountain and also sharing stories about outdoor activity

## WEBSITE STRUCTURE

- Header
  - Navbar
- Main
  - Banner section
  - Tracking and Stories Section
  - Gallery section
  - Contact section
    - Form

## SECRET RECIPE
- HTML
- CSS
- JavaScript
- External/Internal Source
  - Icon
  - Image
  - BBImages

Note*: 
- VANILLA JS, CSS ARE USED. The power of Vanilla

## Source Versioning
We use source versioning for separate between main repo and branch for accessibility, security and also avoid conflict at an project

### Branch
<ol>
<li>Create branch from main using "GIT CHECKOUT -B BRANCH_NAME" <br><br>

![](assets/image/gif/branch1.gif)
</li>
<li>After new branch created, we check the status of new branch using "GIT STATUS". It will give information about current branch <br><br>

![](assets/image/gif/branch2.gif)
</li>
<li>Now we must pull latest source from MAIN using "GIT PULL ORIGIN MAIN". 

![](assets/image/gif/branch3.gif)
</li>
</ol>

### Pull Request
After we do editing some files and pushing to new branch, now we do pull request before merge to main. The function of Pull Request is protect main repo from conflict and also the reviewer can do review the code about quality, syntax, variable and etc<br<br>
<ol>
<li>As collaborator, from main repository, choose the custom branch and select pull request 

![](assets/image/gif/pr1.gif)
</li>
<li>Give description about the code change include addition or deletion code or improvement. And your pull request success created

![](assets/image/gif/pr2.gif)
</li>
<li>As review, you can review the pull request and if reviewer opinion is good, the reviewer can do merging code from branch to main branch using Confirm Merge button

![](assets/image/gif/pr3.gif)
</li>
</ol>


## Deployment
>### NETLIFY
<ol>
<li>You need to login netlify account. You can login using several methods. In this case, i used Github account
<img src="https://i.ibb.co/DtCgLTG/tes13.png" alt="tes13" border="0"></li>
<li>You will redirect to Github login page. Fill the username / email and password fill and then Sign In
<img src="https://i.ibb.co/7GMjs0c/tes14.png" alt="tes14" border="0"></li>
<li>You will redirect to Dashboard Page. Select SITE menu at sidebar to add New Site. And then choose Add new Site. In this example, i used import from existing project because the project for deployment came from Github.

![](assets/image/gif/netlify1.gif)
![](assets/image/gif/netlify2.gif)

</li>
<li>Choose the repository from Github for deployment. And then select Deploy

![](assets/image/gif/netlify3.gif)
</li>
<li>Deployment process will be proceed automatically. You can see the deployment status at the Site Overview page. If deployment success, you'll get the default web address from netlify.

![](assets/image/gif/netlify4.gif)
</li>
<li>If you wanna change the site name, go to Site Configuration and choose Change site name 

![](assets/image/gif/netlify5.gif)
</li>
<li>Customize your site name, and then Save. Your site name will be replace 

![](assets/image/gif/netlify6.gif)
</li>
<li>Now at your browser, go to your custom site name. And your website now go live using netlify

![](assets/image/gif/netlify7.gif)
</li>
</ol>
<br>

> ### NIAGAHOSTER
<ol>
<li>First signup to Niagahoster. After that choose the product. In this cases, i use domain product for week 4 assignment

![](assets/image/gif/niaga1.gif)

</li>
<li>Check your domain name to checking availbility of your website name. In this case, i use jejakjejaka for my website name

![](assets/image/gif/niaga2.gif)

</li>
<li>If your site name available, you can check the domain and also the price. Choose what do you want. In this case, i use .site domain

![](assets/image/gif/niaga3.gif)

</li>
<li>Choose the product service. In this case, only buy domain

![](assets/image/gif/niaga4.gif)

</li>
<li>Choose the payment method. I use QRIS method for easier payment

![](assets/image/gif/niaga5.gif)

</li>
<li>You will be get modal notification for input your profile. 

![](assets/image/gif/niaga6.gif)

</li>
<li>After fill the profile modal, you'll go to payment page. For QRIS, the QR image will be shown. Just follow the instruction 

![](assets/image/gif/niaga7.gif)

</li>
<li>And voila. Your website ready to live 

![](assets/image/gif/niaga8.gif)

</li>

</ol>
<br>

> ### CLOUDFLARE
<ol>
<li>First signup to Cloudflare. You can use existing email and set the password. You'll receive confirmation email from Cloudflare

![](assets/image/upload/cloud0.png)

</li>
<li>After receive email from Cloudflare and email verification, you can login using email and password that you've registered before. When login success, you'll be redicreting to Cloudflare dashboard

![](assets/image/upload/cloud01.png)

</li>
<li>Register your site to Cloudfare

![](assets/image/upload/cloud1.png)

</li>
<li>For assignment week 4, choose Free feature

![](assets/image/upload/cloud2.png)

</li>
<li>At this section, pay attention to point 2. Because Nameserver 1 and 2 is important. Because it needs registered at niagahoster domain server. So we move to Niagahoster

![](assets/image/upload/cloud022.png)

</li>
<li>At Niagahoster, we change the nameserver from default to Cloudflare nameserver

![](assets/image/upload/cloud3.png)
![](assets/image/upload/cloud31.png)

</li>
<li>After we set the nameserver from Niagahoster, we must set the DNS routing at DNS menu. For example, i set the DNS record with <br><br>
<ol>
<li>jejakjejaka.site</li>
<li>www.jejakjejaka.site</li>
<br>
</ol>

![](assets/image/upload/cloud6.png)
> NOTE <br>
> There are several types of DNS record type : <br>
> <ol>
> <li>A and AA : Map a domain name to one or multiple IPv4 or IPv6 address(es).</li><br>
> <li>CNAME : Map a domain name to another (canonical) domain name. Can be used to resolve other record types present on the target domain name.</li><br>
> <li>MX : A mail exchange (MX) record is required to deliver email to a mail server.</li><br>
> <li>DKIM : A DomainKeys Identified Mail (DKIM) record ensures email authenticity by cryptographically signing emails.</li><br>
> <li>SPF : A Sender Policy Framework (SPF) record lists authorized IP addresses and domains that can send email on behalf of your domain.</li><br>
> <li>DMARC : A Domain-based Message Authentication Reporting and Conformance (DMARC) record helps generate aggregate reports about your email traffic and provide clear instructions for how email receivers should treat non-conforming emails.</li><br>
> </ol>
<br>
Now we move to Netlify for setting our custom domain

</li><br>
<li>At Netlify, choose our site and select Domain setting

![](assets/image/upload/dom1.png)

</li>
<li>Choose add domain

![](assets/image/upload/dom2.png)

</li>
<li>Fill the input field with your custom domain. At this example, i fill with jejakjejaka.site

![](assets/image/upload/dom3.png)

</li>
<li>Now we can access our website without using netlify domain.
We can use jejakjejaka.site<br><br>

![](assets/image/upload/dom5.png)

</li>
</ol>

## Reach Me Out

[![Linkedin Badge](https://img.shields.io/badge/-Ade_Kresna_D-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/ade-kresna-dewantara/)
[![Gmail Badge](https://img.shields.io/badge/-kresnafti2013@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:kresnafti2013@gmail.com)
