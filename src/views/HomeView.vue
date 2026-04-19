<template>
  <section class="about">
    <h1>Acerca del Proyecto</h1>

    <p class="description">
      Este es un proyecto de ejemplo desarrollado como parte del aprendizaje en clases.
      Integra diferentes tecnologías modernas del ecosistema frontend para construir
      una aplicación completa y funcional.
    </p>

    <p>
      En este proyecto se aplicaron conceptos como componentes reutilizables,
      manejo de estado, consumo de APIs y estilos con preprocesadores.
    </p>

    <h2>📚 Recursos y Tutoriales</h2>

    <ul class="links">
      <li v-for="link in links" :key="link.name">
        <a :href="link.url" target="_blank" rel="noopener">
          {{ link.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  interface Link {
    name: string
    url: string
  }

  const links: Link[] = [
    {
      name: 'Vue 3 (Documentación oficial)',
      url: 'https://vuejs.org/'
    },
    {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/'
    },
    {
      name: 'SCSS (Sass)',
      url: 'https://sass-lang.com/'
    },
    {
      name: 'Axios',
      url: 'https://axios-http.com/'
    },
    {
      name: 'JSON Server v 0.17.4',
      url: 'https://www.npmjs.com/package/json-server/v/0.17.4'
    },
    {
      name: 'JSON Server Auth',
      url: 'https://github.com/jeremyben/json-server-auth'
    },
    {
      name: 'Bootstrap',
      url: 'https://getbootstrap.com/'
    }
  ]
</script>

<style scoped lang="scss">
  .about {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;

    h1 {
      margin-bottom: 1rem;
    }

    .description {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    h2 {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    .links {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: #42b883;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>