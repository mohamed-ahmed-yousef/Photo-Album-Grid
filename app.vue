<template>
  <p>{{data}}</p>
</template>

<script lang="ts" setup>

const query = gql`
query getPhotos {
  albums {
    data {
      id
      title
      photos {
        data {
          id,
          thumbnailUrl,
          title,
          url,
        }
      }
    }
  }
}
`


const { data } = await useAsyncQuery(query)
console.log(data)
</script>
