<?php
include_once($_SERVER["DOCUMENT_ROOT"] . '/local/js/displayBlock.js');

AddEventHandler('main', 'OnEpilog', function(){
    $arJsConfig = array(
        'displayBlock' => array(
            'js' => '/local/js/displayBlock.js',
        ),
    );

    foreach ($arJsConfig as $ext => $arExt) {
        \CJSCore::RegisterExt($ext, $arExt);
    }

    CUtil::InitJSCore(array('displayBlock'));
});