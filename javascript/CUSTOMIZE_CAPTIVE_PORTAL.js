//ckeditor
ClassicEditor
.create( document.querySelector( '#editor' ) )
.then( editor => {
    // Define the dropdown options
    const dropdownOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
        { value: 'option5', label: 'Option 5' }
    ];

    // Create the dropdown configuration
    const dropdownConfig = {
        model: {
            values: dropdownOptions
        },
        view: {
            options: dropdownOptions
        }
    };

    // Add the dropdown to the editor toolbar
    editor.ui.componentFactory.add( 'dropdown', locale => {
        const dropdownView = new CKEditor5DropdownView( locale );
        dropdownView.render();

        return dropdownView;
    }, dropdownConfig );
} )
.catch( error => {
    console.error( error );
} );
ClassicEditor
            .create( document.querySelector( '#editorA' ) )
            .then( editor => {
                // Define the dropdown options
                const dropdownOptions = [
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' },
                    { value: 'option4', label: 'Option 4' },
                    { value: 'option5', label: 'Option 5' }
                ];

                // Create the dropdown configuration
                const dropdownConfig = {
                    model: {
                        values: dropdownOptions
                    },
                    view: {
                        options: dropdownOptions
                    }
                };

                // Add the dropdown to the editor toolbar
                editor.ui.componentFactory.add( 'dropdown', locale => {
                    const dropdownView = new CKEditor5DropdownView( locale );
                    dropdownView.render();

                    return dropdownView;
                }, dropdownConfig );
            } )
            .catch( error => {
                console.error( error );
            } );

        ClassicEditor
            .create( document.querySelector( '#editorB' ) )
            .catch( error => {
                console.error( error );
            } );

        ClassicEditor
            .create( document.querySelector( '#editorC' ) )
            .catch( error => {
                console.error( error );
            } );
            
