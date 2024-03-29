<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query. 
 * E.g., it puts together the home page when no home.php file exists.
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
    <!--Start Content Grid--> 
    <div class="row content">
        <?php if ($colorway_sidebar == 'left') { ?>
            <div class="col-md-4 col-sm-4">
                <div class="sidebar <?php echo esc_attr($colorway_sidebar); ?>">
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
            <div class="content-wrap">
               
                <div class="blog" id="blogmain">
                    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                            <?php get_template_part('templates/content/content', 'loop'); ?>
                            <?php
                        endwhile;
                    else:
                        ?>
                        <div>
                            <p> <?php get_template_part('templates/content/content', 'none'); ?> </p>
                        </div>
                    <?php endif; ?>
                </div> 
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
