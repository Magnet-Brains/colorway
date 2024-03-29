<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 */
get_header();
$colorway_sidebar = '';
$colorway_center = '';
$a = get_option('blog-layout');
switch ($a) {
    case 'content-sidebar':
        $colorway_sidebar = 'right';
        break;
    case 'sidebar-content':
        $colorway_sidebar = 'left';
        break;
    case 'content':
        $colorway_center = 'col-md-12 col-sm-12';
        break;
    default:
        $colorway_sidebar = 'right';
}
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
    <div class="row content">
        <?php if ($colorway_sidebar == 'left') { ?>
            <div class="col-md-4 col-sm-4">
                <div class="sidebar <?php echo esc_html($colorway_sidebar); ?>">
                    <?php get_sidebar(); ?>
                </div>
            </div>
        <?php } ?>

        <div class="<?php
        if ($colorway_center != '') {
            echo esc_attr($colorway_center);
        } else {
            echo 'col-md-8';
        }
        ?>">
            <!--Start Content Grid-->
            <div class="content-wrap">
                
                <div class="blog" id="blogmain">
                    <?php
                    /* Queue the first post, that way we know
                     * what date we're dealing with (if that is the case).
                     *
                     * We reset this later so we can run the loop
                     * properly with a call to rewind_posts().
                     */
                    
                    if (have_posts()) :
                        the_archive_title('<h1 class="page-title">', '</h1>');
                        while (have_posts()) :
                            the_post();
                            the_archive_description('<div class="taxonomy-description">', '</div>');
                            /* Run the loop for the archives page to output the posts.
                             * If you want to overload this in a child theme then include a file
                             * called loop-archives.php and that will be used instead.
                             */
                            get_template_part('templates/content/content', 'loop');
                        endwhile;
                        ?>
                    </div>
                    <?php
                    colorway_pagination();
                else :
               
                    ?>    <div>
                        <p> <?php get_template_part('templates/content/content', 'none'); ?> </p>
                    </div>
                <?php endif;
                ?>
            </div>
        </div>
        <?php if ($colorway_sidebar == 'right') { ?>
            <div class="col-md-4 col-sm-12">
                <div class="sidebar <?php echo esc_attr($colorway_sidebar); ?>">
                    <?php get_sidebar(); ?>
                </div>
            </div>
        <?php } ?>

        <div class="clear"></div>
        <!--End Content Grid-->
    </div>
</div>
</div>
</div>
<!--End Container Div-->
<?php get_footer(); ?>
