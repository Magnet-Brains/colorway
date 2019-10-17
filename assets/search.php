<?php /**
 * The template for displaying Search Results pages.
 *
 */ ?>
<?php
get_header();

$b = get_option('container-layout');
       switch ($b) {
           case 'container':
               $container = 'container-head container';
               break;
           case 'fullwidth-container':
               $container = 'container-fluid';
               break;
           default:
               $container = 'container-fluid';
       }
?>
<div class="cw-content <?php echo esc_attr($container); ?>">
           <div class="cyw-container">
               <div class="<?php
               if ($container != 'container-head container') {
                   echo 'container';
               }
               ?>">
        <!--Start Content Grid-->
        <div class="row content">
            <div class="col-md-8 col-sm-8">
                <div class="content-wrap">
                   
                    <div class="blog" id="blogmain">
                        <h1><?php printf(/* translators: %s - plugin name. */ esc_html__('Search Results for: %s', 'colorway'), '' . get_search_query() . ''); ?></h1>
                        <div class="blog_list">
                            <!-- Start the Loop. -->
                            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                                    <div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                                        <?php if ((function_exists('has_post_thumbnail')) && (has_post_thumbnail())) { ?>
                                            <a href="<?php the_permalink(); ?>">
                                                <?php the_post_thumbnail('post_thumbnail', array('class' => 'postimg')); ?>
                                            </a>
                                            <?php
                                        }
                                        ?>
                                        <h2><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php esc_attr_e('Permanent Link to ', 'colorway') . the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
                                        <?php
                                        
                                        printf( 'Posted on <span class="entry-date"><a href="%1$s" rel="bookmark"><time class="entry-date" datetime="%2$s">%3$s</time></a></span> <span class="byline"><span class="author vcard">by <a class="url fn n" href="%4$s" rel="author">%5$s</a></span></span> <span>%6$s</span>',
                esc_url( get_permalink() ),
                esc_attr( get_the_date( 'c' ) ),
                esc_html( get_the_date() ),
                esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
                get_the_author(),
                wp_kses_data(get_the_category_list(', '))                            
        );
                                        ?>
                                        <?php the_excerpt(); ?>
                                        <?php comments_popup_link(__('No Comments.', 'colorway'), __('1 Comment.', 'colorway'), __('% Comments.', 'colorway')); ?>
                                        <div>
                                            
                                        </div>
                                        <a href="<?php the_permalink() ?>"><?php esc_html_e('Read Now >>', 'colorway'); ?></a>
                                    </div>
                                    <div class="clear"></div>
                                    <!-- End the Loop. -->
                                    <?php
                                endwhile;
                            else:
                                ?>
                                <div>
                                    <h2>
                                        <?php esc_html_e('Nothing Found', 'colorway'); ?>
                                    </h2>
                                    <p>
                                        <?php esc_html_e('Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'colorway'); ?>
                                    </p>
                                    <?php get_search_form(); ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <div class="folio-page-info">
                        <!--<label>Page:</label>-->
                        <?php /* Display navigation to next/previous pages when applicable */ ?>
                        <?php if ($wp_query->max_num_pages > 1) : ?>
                            <?php next_posts_link(__('&larr; Older posts', 'colorway')); ?>
                            <?php previous_posts_link(__('Newer posts &rarr;', 'colorway')); ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="sidebar <?php echo esc_attr($sidebar); ?>">
                    <?php get_sidebar(); ?>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        <!--End Content Grid-->
    </div>
    </div>
</div>
<!--End Container Div-->
<?php get_footer(); ?>
