<?php get_header(); ?>
<main style="max-width:800px;margin:4rem auto;padding:0 1.5rem">
  <?php if (have_posts()): while (have_posts()): the_post(); ?>
    <article>
      <h1 style="color:var(--navy);margin-bottom:1.5rem"><?php the_title(); ?></h1>
      <div style="color:var(--text-l);line-height:1.8"><?php the_content(); ?></div>
    </article>
  <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>
