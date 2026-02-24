<?php get_header(); ?>
<main style="max-width:800px;margin:4rem auto;padding:0 1.5rem">
  <?php if (have_posts()): while (have_posts()): the_post(); ?>
    <article>
      <h1 style="font-size:2rem;color:var(--navy);margin-bottom:2rem;font-weight:800"><?php the_title(); ?></h1>
      <div style="color:var(--text-l);line-height:1.8;font-size:1rem"><?php the_content(); ?></div>
    </article>
  <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>
