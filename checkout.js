// add_action( 'wp_footer', 'footerScript' );

// function footerScript() {
// 	$domain = 'tienda_lcb'; // The domain slug
// 	global $woocommerce;
	
// 	if( wp_script_is( 'jquery', 'done' ) ) {	
		
// 		if( !is_checkout() && !is_account_page()) return;
	
// 		$zones = array(
// 					array(
// 						'value' => '',
// 						'label' => __( 'Selecciona la Zona', $domain ),
// 					),
// 					array(
// 						'value' => 'caba',
// 						'label' => __( 'Caba', $domain ),
// 					),
// 					array(
// 						'value' => 'gba_norte',
// 						'label' => __( 'GBA Norte', $domain ),
// 					),
// 					array(
// 						'value' => 'gba_oeste',
// 						'label' =>__( 'GBA Oeste', $domain ),
// 					),
// 					array(
// 						'value' => 'gba_sur',
// 						'label' =>__( 'GBA Sur', $domain ),
// 					),
// 				);

// 		// Default option value
// 		$default_barrio = __( 'Selecciona el Barrio', $domain );
// 		// Dynamic select field options for Javascript/jQuery
// 		$options_0 = array( '' => $default_barrio );
// 		$options_caba = array(
// 			''  => $default_barrio,
// 			'abasto' => __('Abasto', $domain ),
// 			'agronomía' => __('Agronomía', $domain ),
// 			'almagro' => __('Almagro', $domain ),
// 			'balvanera' => __('Balvanera', $domain ),
// 			'barracas' => __('Barracas', $domain ),
// 			'belgrano' => __('Belgrano', $domain ),
// 			'boedo' => __('Boedo', $domain ),
// 			'caballito' => __('Caballito', $domain ),
// 			'chacarita' => __('Chacarita', $domain ),
// 			'coghlan' => __('Coghlan', $domain ),
// 			'colegiales' => __('Colegiales', $domain ),
// 			'constitucion' => __('Constitución', $domain ),
// 			'devoto' => __('Devoto', $domain ),
// 			'flores' => __('Flores', $domain ),
// 			'floresta' => __('Floresta', $domain ),
// 			'la_boca' => __('La Boca', $domain ),
// 			'liniers' => __('Liniers', $domain ),
// 			'lugano' => __('Lugano', $domain ),
// 			'mataderos' => __('Mataderos', $domain ),
// 			'monserrat' => __('Monserrat', $domain ),
// 			'nunez' => __('Nuñez', $domain ),
// 			'palermo' => __('Palermo', $domain ),
// 			'parque_avellaneda' => __('Parque Avellaneda', $domain ),
// 			'parque_chacabuco' => __('Parque Chacabuco', $domain ),
// 			'parque_patricios' => __('Parque Patricios', $domain ),
// 			'paternal' => __('Paternal', $domain ),
// 			'pompeya' => __('Pompeya', $domain ),
// 			'puerto_madero' => __('Puerto Madero', $domain ),
// 			'recoleta' => __('Recoleta', $domain ),
// 			'retiro' => __('Retiro', $domain ),
// 			'saavedra' => __('Saavedra', $domain ),
// 			'san_cristobal' => __('San Cristóbal', $domain ),
// 			'san_telmo' => __('San Telmo', $domain ),
// 			'versalles' => __('Versalles', $domain ),
// 			'villa_crespo' => __('Villa Crespo', $domain ),
// 			'villa_del_parque' => __('Villa del Parque', $domain ),
// 			'villa_luro' => __('Villa Luro', $domain ),
// 			'villa_ortuzar' => __('Villa Ortuzar', $domain ),
// 			'villa_pueyrredon' => __('Villa Pueyrredón', $domain ),
// 			'villa_real' => __('Villa Real', $domain ),
// 			'villa_soldati' => __('Villa Soldati', $domain ),
// 			'villa_urquiza' => __('Villa Urquiza', $domain ),		
// 		);
// 		$options_gba_norte = array(
// 			''  => $default_barrio,
// 			'acassuso' => __('Acassuso', $domain ),
// 			'beccar' => __('Beccar', $domain ),
// 			'florida' => __('Florida', $domain ),
// 			'la_lucila' => __('La Lucila', $domain ),
// 			'martinez' => __('Martinez', $domain ),
// 			'munro' => __('Munro', $domain ),
// 			'olivos' => __('Olivos', $domain ),
// 			'san_isidro' => __('San Isidro', $domain ),
// 			'vicente_lopez' => __('Vicente López', $domain ),
// 			'villa_adelina' => __('Villa Adelina', $domain ),
// 		);
// 		$options_gba_oeste = array(
// 			''  => $default_barrio,
// 			'caseros' => __('Caseros', $domain ),
// 			'castelar' => __('Castelar', $domain ),
// 			'ciudad_jardin' => __('Ciudad Jardín', $domain ),
// 			'ciudadela' => __('Ciudadela', $domain ),
// 			'haedo' => __('Haedo', $domain ),
// 			'ituzaingo' => __('Ituzaingó', $domain ),
// 			'lomas_del_mirador' => __('Lomas del Mirador', $domain ),
// 			'morón_centro' => __('Morón Centro', $domain ),
// 			'parque_leloir' => __('Parque Leloir', $domain ),
// 			'ramos_mejia' => __('Ramos Mejía', $domain ),
// 			'saenz_peña' => __('Saenz Peña', $domain ),
// 			'san_justo_centro' => __('San Justo Centro', $domain ),
// 			'san_martin_centro' => __('San Martín Centro', $domain ),
// 			'santos_lugares' => __('Santos Lugares', $domain ),
// 			'villa_ballester' => __('Villa Ballester', $domain ),
// 			'villa_bosh' => __('Villa Bosh', $domain ),
// 			'villa_celina' => __('Villa Celina', $domain ),
// 			'villa_luzuriaga' => __('Villa Luzuriaga', $domain ),
// 		);
// 		$options_gba_sur = array(
// 			''  => $default_barrio,
// 			'adrogue' => __('Adrogué', $domain ),
// 			'avellaneda' => __('Avellaneda', $domain ),
// 			'banfield' => __('Banfield', $domain ),
// 			'bernal' => __('Bernal', $domain ),
// 			'burzaco' => __('Burzaco', $domain ),
// 			'canning' => __('Canning', $domain ),
// 			'ezeiza' => __('Ezeiza', $domain ),
// 			'gerli' => __('Gerli', $domain ),
// 			'lanus_centro' => __('Lanús Centro', $domain ),
// 			'lomas_centro' => __('Lomas Centro', $domain ),
// 			'monte_grande' => __('Monte Grande', $domain ),
// 			'remedios_de_escalada' => __('Remedios de Escalada', $domain ),
// 			'sarandi' => __('Sarandí', $domain ),
// 			'temperley' => __('Temperley', $domain ),
// 			'valentin_alsina' => __('Valentín Alsina', $domain ),
// 			'wilde' => __('Wilde', $domain ),
// 		);		

		
//     // jQuery code
//     ?>
//     <script type="text/javascript" defer>
//     jQuery(function($){
// 		// Custom Account Fields
//         var op0 = <?php echo json_encode($options_0); ?>,
//             op_caba = <?php echo json_encode($options_caba); ?>,
//             op_gba_norte = <?php echo json_encode($options_gba_norte); ?>,
//             op_gba_oeste = <?php echo json_encode($options_gba_oeste); ?>,
//             op_gba_sur = <?php echo json_encode($options_gba_sur); ?>,
//             select_billing_zone = 'select[name="billing_zone"]',
//             select_billing_neighbourhood = 'select[name="billing_neighbourhood"]';
//             select_shipping_zone = 'select[name="shipping_zone"]',
//             select_shipping_neighbourhood = 'select[name="shipping_neighbourhood"]';

//         // Utility function to fill dynamically the select field options
//         function dynamicSelectOptions( opt, field ){
//             var options = '';
// 			var current_value = $(field).val();
// 			console.log('current_value: ' + $(field).val());
//             $.each( opt, function( key, value ) {
// 				console.log('value: ' + value);
// 				selected = (key == current_value) ? ' selected' : '';
//     			console.log('selected: ' + selected);
//             options += '<option ' + selected + ' value="' + key + '">' + value + '</option>';
//             });
//             $(field).html(options);
//         }

// 		console.log('select_billing_zone: ' + $(select_billing_zone).val());
// 		console.log('select_billing_neighbourhood: ' + $(select_billing_neighbourhood).val());

// 		if( $(select_billing_zone).val() == 'caba' )
// 			dynamicSelectOptions( op_caba, select_billing_neighbourhood );
// 		else if( $(select_billing_zone).val() == 'gba_norte' )
// 			dynamicSelectOptions( op_gba_norte, select_billing_neighbourhood );
// 		else if( $(select_billing_zone).val() == 'gba_oeste' )
// 			dynamicSelectOptions( op_gba_oeste, select_billing_neighbourhood );
// 		else if( $(select_billing_zone).val() == 'gba_sur' )
// 			dynamicSelectOptions( op_gba_sur, select_billing_neighbourhood );
// 		else
// 			dynamicSelectOptions( op0, select_billing_neighbourhood ); // Reset to default
		
// 		console.log('select_shipping_zone: ' + $(select_shipping_zone).val());
// 		console.log('select_shipping_neighbourhood: ' + $(select_shipping_neighbourhood).val());
// 		if( $(select_shipping_zone).val() == 'caba' ) {
// 			dynamicSelectOptions( op_caba, select_shipping_neighbourhood );
// 		}			
// 		else if( $(select_shipping_zone).val() == 'gba_norte' ) {
// 			dynamicSelectOptions( op_gba_norte, select_shipping_neighbourhood );
// 		}
// 		else if( $(select_shipping_zone).val() == 'gba_oeste' ) {
// 			dynamicSelectOptions( op_gba_oeste, select_shipping_neighbourhood );
// 		}
// 		else if( $(select_shipping_zone).val() == 'gba_sur' ) {
// 			dynamicSelectOptions( op_gba_sur, select_shipping_neighbourhood );
// 		}
// 		else {
// 			dynamicSelectOptions( op0, select_shipping_neighbourhood ); // Reset to default	
// 		}
		
//         // 2. On live selection event on the first dropdown
// 		// Billing
// 		$(select_billing_neighbourhood).change(function(){
// 			console.log ('Barrio seleccionado: ' + $(this).val());
// 		});
									  
//         $(select_billing_zone).change(function(){
//             if( $(this).val() == 'caba' ) {
//                 dynamicSelectOptions( op_caba, select_billing_neighbourhood );
// 			}
//             else if( $(this).val() == 'gba_norte' ) {
//                 dynamicSelectOptions( op_gba_norte, select_billing_neighbourhood );
// 			}
//             else if( $(this).val() == 'gba_oeste' ) {
//                 dynamicSelectOptions( op_gba_oeste, select_billing_neighbourhood );
// 			}
//             else if( $(this).val() == 'gba_sur' ) {
//                 dynamicSelectOptions( op_gba_sur, select_billing_neighbourhood );
// 			}
//             else {
//                 dynamicSelectOptions( op0, select_billing_neighbourhood ); // Reset to default
// 			}
//         });
		
// 		// Shipping
// 		$(select_shipping_zone).change(function(){
//             if( $(this).val() == 'caba' ) {
//                 dynamicSelectOptions( op_caba, select_shipping_neighbourhood );
// 			}
//             else if( $(this).val() == 'gba_norte' ) {
//                 dynamicSelectOptions( op_gba_norte, select_shipping_neighbourhood );
// 			}
//             else if( $(this).val() == 'gba_oeste' ) {
//                 dynamicSelectOptions( op_gba_oeste, select_shipping_neighbourhood );
// 			}
//             else if( $(this).val() == 'gba_sur' ) {
//                 dynamicSelectOptions( op_gba_sur, select_shipping_neighbourhood );
// 			}
//             else {
//                 dynamicSelectOptions( op0, select_shipping_neighbourhood  ); // Reset to default
// 			}
//         });
		
//     });
//     </script>

//     <?php
		
//     }
// }
