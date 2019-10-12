<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package WordPress
 * @subpackage Colorway
 * @since Colorway 1.0
 */
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
    <div class="row content">
        <div class="content-wrap">
            
            <div class="fullwidth">
                <header class="page-header">
                    <h1 class="page-title"><?php esc_html_e('Oops! That page can&rsquo;t be found.', 'colorway'); ?></h1>
                </header><!-- .page-header -->
                <div class="page-content">
                    <p><?php esc_html_e('It looks like nothing was found at this location. Maybe try a search?', 'colorway'); ?></p>

                    <?php get_search_form(); ?>

                </div><!-- .page-content -->
            </div>
        </div>
    </div><!-- .wrap -->
</div>
</div>
</div>

<?php
get_footer();
