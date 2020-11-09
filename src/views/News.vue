<template>
    <div class="content">
        <h1 class="mb-3 mt-2 text-center">Новости:</h1>

        <b-card class="new-card mb-4 mx-auto" v-for="post in posts" :key="post"
          :title=post.title
          :img-src=post.preview
          img-alt="PostImage"
          :footer=post.date_pub
          style="max-width: 70%; min-width:60%;"
        >
          <b-card-text>
            {{ post.body }}
          </b-card-text>
          <b-link :to="{name: 'post', params: {slug: post.slug}, props: true}" tag="button" class="button"><b-button variant=primary>Читать</b-button></b-link>
        </b-card>
    </div>
</template>

<script>
  export default{
    data() {
      return  {
          posts: [],
          pageNumber: 0,
          number: 0,
              
      };
    },
    methods: {
      nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      }
    },
    props:{
      listData:{
        type:Array,
        required:true
      },
      size:{
        type:Number,
        required:false,
        default: 10
      }
    },
    computed:{
      pageCount(){
        let l = this.listData.length,
            s = this.size;
        // редакция переводчика спасибо комментаторам
        return Math.ceil(l/s);
        // оригинал
        // return Math.floor(l/s);
      },
      paginatedData(){
          const start = this.pageNumber * this.size,
                end = start + this.size;
          return this.listData.slice(start, end);
      },

    },

    mounted(){
      this.axios
        .get('http://127.0.0.1:8000/apiv1/posts/?no_page')
        .then(response => (this.posts = response.data), console.log(this.posts,))
        .catch(error => console.log(error));

/*      this.posts.data.forEach(item => {
        this.posts.push({
          id: item.id,
          title: item.title,
          slug: item.slug,
          body: item.body,
          preview: item.preview,
          tags: item.tags,
          date_pub: item.date_pub
        })
      });*/
    }

  };


</script>
