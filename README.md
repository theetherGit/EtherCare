<a name="readme-top"></a>

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="static/green.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Project Management App</h3>

  <p align="center">
    A fullstack project management app for every development team.
    <br />
    <a href="https://github.com/theetherGit/EtherCare"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/theetherGit/EtherCare">View Demo</a>
    ·
    <a href="https://github.com/theetherGit/EtherCare/issues">Report Bug</a>
    ·
    <a href="https://github.com/theetherGit/EtherCare/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![EtherCare Dashboard][ethercare-dashboard]](https://github.com/theetherGit/EtherCare/blob/main/static/dashboard.png)

There are many open source project management apps or webapp. What I was looking for was supposed to be not a messy or chaotic UI, well good design is key to everything. Currently, it's under development phase.

Here's why:

- Your time should be focused on creating something amazing. A project that solves a problem and helps others
- You shouldn't be doing the making templates or handling things every time in project management.

Of course, no one app will serve all type of needs since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![SvelteKit][kit.svelte.dev]][sveltekit-url]
- [![Svelte][svelte.dev]][svelte-url]
- [![TailwindCSS][tailwindcss.com]][tailwindcss-url]
- [![ViteJS][vitejs.dev]][vitejs-url]
- [![Redis][redis.io]][redis-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

In this project we have taken a different approach using redis as primary databases. Redis have a redis stack which is totally
different to other databases.

### Prerequisites

- NodeJS : [Learn how to install NodeJS using NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
- Redis Stack : [Install redis stack server](https://redis.io/docs/stack/get-started/install/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/theetherGit/EtherCare.git
   ```
2. Change directory to `EtherCare`
   ```sh
   cd EtherCare
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Add a `.env` file.

5. In `.env` add `REDIS_URL` which is your redis DB url and `JWT_KEY` which is a secret key.

6. Run server
   ```sh
   npm run dev
   ```

> By default this project uses port 80. If you want to change the port use vite.config.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Shivam - [@theether0](https://twitter.com/theether0) - shivam@theether.in

EtherCare: [https://github.com/theetherGit/EtherCare](https://github.com/theetherGit/EtherCare)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[issues-shield]: https://img.shields.io/github/issues/theetherGit/EtherCare.svg?style=for-the-badge
[issues-url]: https://github.com/theetherGit/EtherCare/issues
[license-shield]: https://img.shields.io/github/license/theetherGit/EtherCare.svg?style=for-the-badge
[license-url]: https://github.com/theetherGit/EtherCare/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/theether0
[product-screenshot]: static/ladning.png
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[kit.svelte.dev]: https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white
[sveltekit-url]: https://kit.svelte.dev
[tailwindcss.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwindcss-url]: https://tailwindcss.com
[vitejs.dev]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[vitejs-url]: https://vitejs.dev
[redis.io]: https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white
[redis-url]: https://redis.io
