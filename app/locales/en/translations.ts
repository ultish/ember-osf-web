/* tslint:disable:object-literal-sort-keys max-line-length */

export default {
    general: {
        OSF: 'OSF',
        share: 'Share',
        embed: 'Embed',
        download: 'Download',
        download_url: 'Download url',
        delete: 'Delete',
        view: 'View',
        edit: 'Edit',
        cancel: 'Cancel',
        revisions: 'Revisions',
        md5: 'MD5',
        date: 'Date',
        sha2: 'SHA2',
        title: 'Title',
        contributors: 'Contributors',
        modified: 'Modified',
        description: 'Description',
        create: 'Create',
        and: 'and',
        or: 'or',
        more: 'more',
        upload: 'Upload',
        rename: 'Rename',
        move: 'Move',
        name: 'Name',
        size: 'Size',
        version: 'Version',
        downloads: 'Downloads',
        close: 'Close',
        back: 'Back',
        filter: 'Filter',
        revert: 'Revert',
        save: 'Save',
        ellipsis: '\u2026',
        warning: 'Warning',
        clipboard_copy: 'Copy to clipboard',
        sort_asc: 'Sort ascending',
        sort_desc: 'Sort descending',
        sort: 'Sort',
        asc_paren: '(asc)',
        desc_paren: '(desc)',
        next: 'next',
        previous: 'previous',
        help: 'Help',
        api: 'API',
        cos: 'Center for Open Science',
        home: 'Home',
        period: '.',
        hosted_on_the_osf: 'Hosted on OSF',
    },
    maintenance: {
        line1: 'The site will undergo maintenance between <strong>{{start}} and {{end}}</strong> ({{utc}} UTC).',
        line2: 'Thank you for your patience.',
        title: 'Notice:',
    },
    quickfiles: {
        title: '{{user-name}}\'s Quick Files',
        description: 'Files uploaded here are <b>publicly accessible</b> and easy to share with others using the share link.',
        feedback_dialog_text: 'Tell us what you think of Quick Files',
        transition_auth: 'You must be logged in to view your Quick Files. Redirecting to the login page.',
        share_by_email: 'Share by email',
    },
    feedback: {
        button_text: 'Feedback',
        placeholder: 'Share your feedback',
        follow_up_label: 'Contact me about further opportunities to improve OSF.',
        title: 'Send feedback',
        confirm_button_text: 'Send',
        thank_you: 'Thank you!',
        success: 'Your feedback has been submitted.',
        dismiss: 'Got it',
    },
    file_detail: {
        version: {
            id: 'Version ID',
            title: '(Version: {{version-number}})',
        },
        embed: {
            dynamic: 'Dynamically render iframe with JavaScript',
            direct: 'Direct iframe with fixed height and width',
        },
        tags: 'Tags:',
        toggle: 'Toggle view:',
        delete_file: {
            question: 'Delete file?',
            confirm: 'Are you sure you want to delete <b>{{file-name}}</b>?',
        },
        sha2_description: 'SHA-2 is a cryptographic hash function designed by the NSA used to verify data integrity.',
        md5_description: 'MD5 is an algorithm used to verify data integrity.',
        // toast messages
        delete_success: 'File deleted',
        delete_fail: 'Unable to delete file',
        save_success: 'File saved',
        save_fail: 'Unable to save file',
        mfr_iframe_title: 'Rendering of document',
        add_tag: 'Add a tag to enhance discoverability',
        embed_js_label: 'Embeddable javascript',
        embed_iframe_label: 'Embeddable iframe',
    },
    file_browser: {
        loading: 'Loading...',
        delete_multiple: 'Delete multiple',
        download_zip: 'Download as zip',
        drop_placeholder: 'Drop files here to upload',
        drop_reminder: 'Drop file to upload',
        no_files: 'This user has not uploaded any Quick Files',
        share_title: 'Share',
        clipboard_copy: 'Copy to clipboard',
        info: {
            title: 'How to use the file browser',
            upload: '<b>Upload:</b> Upload single files via drag and drop or by clicking the upload button.',
            select: '<b>Select rows:</b> Click on a row to show further actions in the toolbar. Use Command or Shift keys to select multiple files.',
            folders: '<b>Folders:</b> Not supported; consider an OSF project for uploading and managing many files.',
            open1: '<b>Open files:</b> Click a file name to view the file on OSF.',
            open2: '<b>Open files in new tab:</b> Press Command (Ctrl in Windows) and click a file name to open it in a new tab.',
            download: '<b>Download as zip:</b> Click the "Download as zip" button in the toolbar to download all files as a .zip.',
        },
        delete_modal: {
            title: 'Delete "{{filename}}"?',
            title_multiple: 'Delete multiple?',
            body: 'This action is irreversible.',
        },
        conflict_modal: {
            title: 'An item named {{textValue}} already exists in this location.',
            keep_info: '"Keep both" will retain both files (and their version histories) in this location.',
            replace_info: '"Replace" will overwrite the existing file in this location. You will lose previous versions of the overwritten file. You will keep previous versions of the moved file.',
            keep_button: 'Keep both',
            replace_button: 'Replace',
        },
        move_modal: {
            title: 'Move file to project',
            move_button: 'Move file',
        },
        filtering: 'Filtering',
        file_added: 'This file has been added.',
        file_added_toast: 'File added',
        file_replaced: 'This file has been replaced.',
        file_deleted: 'This file has been deleted.',
        delete_failed: 'Unable to delete file',
        successfully_moved: 'This file has been successfully moved.',
    },
    dashboard: {
        page_title: 'Home',
        title: 'Dashboard',
        create_new_project_button: 'Create new project',
        quicksearch: {
            search: 'Search your projects',
            other_links: 'Go to <a href="/myprojects/">My Projects</a> to organize your work or <a href="/search/">search</a> OSF',
            no_results: 'No results found.',
            no_projects: {
                line1: 'You have no projects yet. Create a project with the button on the top right.',
                line2: 'This feature allows you to search and quickly access your projects.',
                preview_alt: 'Preview of a full quick projects screen',
            },
            private_parent: 'Private project / ',
            private_grandparent: 'Private project / Private / ',
        },
        noteworthy: {
            description: 'Discover public projects',
            new_and_noteworthy: 'New and noteworthy',
            failed_noteworthy: 'Failed loading "new and noteworthy" projects',
            most_popular: 'Most popular',
            failed_popular: 'Failed loading "most popular" projects',
            search_more: 'Search for more projects',
            by: 'by',
        },
        meetings: {
            title: 'Hosting a conference or meeting?',
            description: 'Use the OSF for Meetings service to provide a central location for conference submissions.',
            button: 'View meetings',
        },
        preprints: {
            title: 'Browse the latest research',
            description: 'Check out the latest preprints hosted on OSF covering a variety of research areas.',
            button: 'View preprints',
        },
    },
    new_project: {
        header: 'Create new project',
        title_placeholder: 'Enter project title',
        more: 'More',
        affiliation: 'Affiliation',
        remove_all: 'Remove all',
        select_all: 'Select all',
        no_matches: 'No matches found',
        description_placeholder: 'Enter project description',
        template_title: 'Template (optional)',
        template_search_help: 'Start typing to search your projects. Selecting project as template will duplicate its structure in the new project without importing the content of that project.',
        template_placeholder: 'Select a project to use as template',
        success_message: 'New project created successfully!',
        stay_here: 'Keep working here',
        go_to_new: 'Go to new project',
    },
    banners: {
        prereg: {
            description: 'Improve your next study. Enter the Prereg Challenge and you could win $1,000.',
            button: 'Start Prereg Challenge',
        },
    },
    move_to_project: {
        create_new_project: 'Create new project',
        connect_to_existing: 'Connect file to existing OSF project',
        enter_project_title: 'Enter project title',
        new_project_message: 'You have selected to create a new public project for your file. Users will still have access to your file unless the project becomes private.',
        choose_project: 'Choose project',
        select_placeholder: 'Click to select',
        project_select_message: 'The list of projects appearing are projects and components for which you have write access. Registrations are not included here.',
        no_projects_exist_error: 'You have no available projects. Go back to create a new project.',
        could_not_create_project: 'Could not create project. Please try again.',
        convert_or_copy_message: {
            project: 'Clicking "Move file" will immediately make changes to your OSF project and move your file.',
            component: 'Clicking "Move file" will immediately make changes to your OSF component and move your file.',
        },
        no_longer_public_warning: {
            project: 'Files moved to private projects will no longer be public or discoverable by others.',
            component: 'Files moved to private components will no longer be public or discoverable by others.',
        },
        file_successfully_moved: 'File was moved successfully!',
        could_not_move_file: 'Could not move file. Please try again.',
        keep_working_here: 'Keep working here',
        go_to_new_project: 'Go to new project',
        go_to_component: 'Go to component',
        go_to_project: 'Go to project',
    },
    navbar: {
        add: 'Add',
        add_a_preprint: 'Add a {{preprintWords.preprint}}',
        browse: 'Browse',
        cancel_search: 'Cancel search',
        donate: 'Donate',
        go_home: 'Go home',
        my_projects: 'My Projects',
        my_quick_files: 'My Quick Files',
        reviews: 'My Reviewing',
        search: 'Search',
        search_help: 'Search help',
        search_the_OSF: 'Search OSF',
        send_search: 'Send search query',
        support: 'Support',
        toggle_primary: 'Toggle primary navigation',
        toggle_secondary: 'Toggle secondary navigation',
        other_views: 'Other OSF views',
    },
    auth_dropdown: {
        log_out: 'Log Out',
        my_profile: 'My Profile',
        osf_support: 'OSF Support',
        settings: 'Settings',
        sign_up: 'Sign Up',
        sign_in: 'Sign In',
        user_gravatar: 'User gravatar',
        toggle_auth_dropdown: 'Toggle auth dropdown',
    },
    search_help_modal: {
        close: 'Close',
        search_help: 'Search help',
        queries: 'Queries',
        paragraph: 'Search uses the <a href={{link}}>Lucene search syntax</a>. This gives you many options, but can be very simple as well. Examples of valid searches include:',
    },
    support: {
        title: 'Support',
        faq_title: 'Frequently asked questions',
        faq_paragraph: 'How can it be free? How will OSF be useful to my research? What is a registration? Get your questions about OSF answered on our ',
        faq_link_text: 'FAQ page',
        faq_button: 'Visit FAQ',
        guides_title: 'OSF guides',
        guides_paragraph_1: 'Learn how to use OSF for improving your research workflow. Read our ',
        guides_link_text: 'guides',
        guides_paragraph_2: 'for step-by-step screenshots that show you the basics of project structures, version control, privacy, files, add-on support, and more!',
        guides_button: 'Visit guides',
        contact_title: 'Get in touch',
        contact_technical: 'For emails about technical support:',
        contact_questions: 'For all other questions or comments:',
        prereg_title: 'Do you have Prereg Challenge related questions?',
        prereg_paragraph_1: 'Check out our ',
        prereg_link_text: 'prereg section',
        prereg_paragraph_2: ' on the cos.io website.',
        status_title: 'Are you experiencing downtime with our services?',
        status_paragraph_1: 'Check out our',
        status_link_text: 'status page',
        status_paragraph_2: 'for updates on how our services are operating.',
        consultation_title: 'Are you looking for statistics consultations?',
        consultation_paragraph: 'COS provides statistics consultation. To learn more about this service visit the',
        consultation_link_text: 'COS statistics consulting page',
        social_title: 'Other ways to get help',
        social_twitter: 'Ask us a question on Twitter',
        social_mailing: 'Join our mailing list',
        social_facebook: 'Follow us on Facebook',
        social_github: 'Connect with COS on GitHub',
    },
    not_found: {
        title: 'Page not found',
        body: 'The requested resource could not be found. If this should not have occurred and the issue persists, please report it to <a href="mailto:{{supportEmail}}">{{supportEmail}}</a>.',
    },
    zoom_to_guid: {
        title: 'Zoom to a GUID within this app',
        zoom: 'Zoom!',
        placeholder: 'Enter a GUID',
    },
    osf_mode_footer: {
        dev_mode: 'This site is running in development mode.',
    },
    footer: {
        status: 'Status',
        faq: 'FAQ/Guides',
        source_code: 'Source Code',
        rpp: 'Reproducibility&nbsp;Project: Psychology',
        rpcb: 'Reproducibility&nbsp;Project: Cancer Biology',
        top: 'TOP Guidelines',
        donate: 'Donate',
        socialize: 'Socialize',
        contact: 'Contact',
        copyright: 'Copyright &copy; 2011-{{currentYear}}',
        terms: 'Terms&nbsp;of&nbsp;Use',
        privacy: 'Privacy&nbsp;Policy',
        separator: ' | ',
    },
    home: {
        title: 'Home',
        youtube_modal_title: 'Getting Started with OSF',
        alert_logged_out: 'You have successfully logged out.',
        brand: 'Open Science Framework',
        tagline: 'A scholarly commons to connect the entire research cycle',
        youtube_label: 'OSF YouTube Video',
        osf_screenshot_alt: 'Screenshot of OSF',
        signup_title: 'Free and open source. Start now.',
        collaboration: 'Simplified Scholarly Collaboration',
        management: 'Cloud-based management for your projects.',
        structured_projects_title: 'Structured projects',
        structured_projects_paragraph: 'Keep all your files, data, and protocols in <strong>one centralized location.</strong> No more trawling emails to find files or scrambling to recover from lost data.',
        secure_cloud: 'Secure Cloud',
        control_access_title: 'Control access',
        control_access_paragraph: '<strong>You control which parts of your project are public or private</strong> making it easy to collaborate with the worldwide community or just your team.',
        control_access_span: 'Project-level Permissions',
        workflow_title: 'Respect for your workflow',
        workflow_paragraph: '<strong>Connect your favorite third party services</strong> directly to OSF.',
        workflow_span: '3rd Party Integrations',
        student_main: '"The OSF is a great way to collaborate and stay organized while still using your favorite external services."',
        student_attrib: '<strong>Kara Woo</strong> - Information Manager, Aquatic Ecology, Washington State',
        integrations_title: 'OSF integrations make your <strong>workflow more efficient</strong>',
        integrations_alt_dropbox: 'Dropbox logo',
        integrations_alt_github: 'Github logo',
        integrations_alt_amazon: 'Amazon S3 logo',
        integrations_alt_box: 'Box logo',
        integrations_alt_google: 'Google Drive logo',
        integrations_alt_figshare: 'Figshare logo',
        integrations_alt_dataverse: 'Dataverse logo',
        integrations_alt_mendeley: 'Mendeley logo',
        features_title: '<strong>Everything</strong> your research needs to be a success',
        features_manage_title: 'Manage your project',
        features_manage_paragraph: 'View all of your projects from <strong>one dashboard.</strong>',
        features_share_title: 'Quickly share files',
        features_share_paragraph: '<strong>Share key project information</strong> and allow others to use and cite it.',
        features_changes_title: 'See project changes',
        features_changes_paragraph: 'See the latest project changes, who is contributing and <strong>historical file versions.</strong>',
        features_analytics_title: 'View project analytics',
        features_analytics_paragraph: 'Access <strong>project data</strong> ranging from visits over time to top referring websites.',
        features_archive_title: 'Archive your data',
        features_archive_paragraph: 'Computer or collaborator explode? With OSF <strong>you will never lose your project data.</strong>',
        features_collaboration_title: 'Control access and collaboration',
        features_collaboration_paragraph: 'Add others to your projects to collaborate, or provide private access to view.',
        features_workflow_title: 'Supercharge your workflow',
        features_workflow_paragraph: 'OSF helps individuals, teams and labs make their <strong>research processes more efficient.</strong>',
        features_registration_title: 'Registration',
        features_registration_paragraph: '<strong>Preserve the state of a project at important parts of its lifecycle</strong> such as the onset of data collection.',
        global_title: '<strong>Contribute</strong> to global scientific efforts',
        global_paragraph: 'Labs and teams across the globe use OSF to open their projects up to the scientific community. You can browse the newest and most popular public projects',
        global_link: 'right here.',
        global_label: 'Get involved',
        non_profit_title: 'We are a <strong>mission-driven non-profit</strong>',
        non_profit_paragraph1: 'OSF is a free, open source service of the',
        non_profit_link: 'Center for Open Science.',
        non_profit_paragraph2: 'We’re aligning scientific practices with scientific values by improving openness, integrity and reproducibility of research.',
        non_profit_label: 'Non-Profit',
        users_title: '<strong>Teachers, researchers, and global teams rely</strong> on OSF',
        users_1_alt: 'Richard Ball',
        users_1_title: 'Making research reproducible &amp; verifiable',
        users_1_paragraph: 'The OSF helps our students understand and apply sound data management principles to their work. And since we have easy access to all of the files the students are working with, it greatly enhances our ability to offer them constructive guidance.',
        users_1_small: 'Richard Ball, Professor of Economics, Haverford College',
        users_2_title: 'Version control makes life easier',
        users_2_paragraph: 'The OSF makes version control effortless. My PI, my lab mates, and I have access to previous versions of a file at any time&#151;and the most current version is always readily available.',
        users_2_small: 'Erica Baranski, PhD Student, Social and Personality Psychology Funder Lab, UC Riverside',
        users_2_alt: 'Erica Baranski',
        users_3_alt: 'Anne Allison',
        users_3_title: 'A centralized hub of information',
        users_3_paragraph: 'The OSF creates a centralized hub of information where I can oversee a diversity of research projects across multiple classes. The centralization, organization, and anywhere-access save me the time and energy necessary for managing these projects.',
        users_3_small: 'Anne Allison, Associate Professor of Biology at Piedmont Virginia Community College',
        free_title1: 'Free and open source.',
        free_title2: 'OSF is a public good built to support your research.',
        free_link: 'Get started',
    },
    sign_up_form: {
        full_name: 'Full name',
        contact_email: 'Contact email',
        confirm_email: 'Confirm email',
        password: 'Password',
        sign_up_free: 'Sign up free',
        password_placeholder: 'Password (Must be {{min}} to {{max}} characters)',
        registration_success: 'Registration successful. Please check {{email}} to confirm your email address.',
    },
    sign_up_policy: {
        paragraph: 'By clicking "Sign up free," you agree to our <a href="{{link1}}">Terms</a> and that you have read our <a href="{{link2}}">Privacy Policy</a>, including our information on <a href="{{link3}}">Cookie Use.</a>',
    },
    validationErrors: {
        description: 'This field',
        inclusion: '{{description}} is not included in the list.',
        exclusion: '{{description}} is reserved.',
        invalid: '{{description}} is invalid.',
        confirmation: '{{description}} doesn\'t match {{on}}.',
        accepted: '{{description}} must be accepted.',
        empty: '{{description}} can\'t be empty.',
        blank: '{{description}} can\'t be blank.',
        present: '{{description}} must be blank.',
        collection: '{{description}} must be a collection.',
        singular: '{{description}} can\'t be a collection.',
        tooLong: '{{description}} is too long (maximum is {{max}} characters).',
        tooShort: '{{description}} is too short (minimum is {{min}} characters).',
        before: '{{description}} must be before {{before}}.',
        after: '{{description}} must be after {{after}}.',
        wrongDateFormat: '{{description}} must be in the format of {{format}}.',
        wrongLength: '{{description}} is the wrong length (should be {{is}} characters).',
        notANumber: '{{description}} must be a number.',
        notAnInteger: '{{description}} must be an integer.',
        greaterThan: '{{description}} must be greater than {{gt}}.',
        greaterThanOrEqualTo: '{{description}} must be greater than or equal to {{gte}}.',
        equalTo: '{{description}} must be equal to {{is}}.',
        lessThan: '{{description}} must be less than {{lt}}.',
        lessThanOrEqualTo: '{{description}} must be less than or equal to {{lte}}.',
        otherThan: '{{description}} must be other than {{value}}.',
        odd: '{{description}} must be odd.',
        even: '{{description}} must be even.',
        positive: '{{description}} must be positive.',
        date: '{{description}} must be a valid date.',
        onOrAfter: '{{description}} must be on or after {{onOrAfter}}.',
        onOrBefore: '{{description}} must be on or before {{onOrBefore}}.',
        email: '{{description}} must be a valid email address.',
        phone: '{{description}} must be a valid phone number.',
        url: '{{description}} must be a valid url.',
        // custom
        email_registered: 'This email address has already been registered.',
        email_match: 'Email addresses must match.',
        password_email: 'Your password cannot be the same as your email address.',
        password_old: 'Your new password cannot be the same as your old password.',
        password_match: 'Passwords must match.',
        recaptcha: 'Please complete reCAPTCHA.',
    },
    node_navbar: {
        toggle: 'Toggle navigation',
        project_nav: 'Project Navigation',
        wiki: 'Wiki',
        analytics: 'Analytics',
        registrations: 'Registrations',
        files: 'Files',
        contributors: 'Contributors',
        addons: 'Add-ons',
        settings: 'Settings',
        comments: 'Comments',
    },
    status: {
        welcome_message: '<h1>Welcome to OSF!</h1><p>Visit our <a href="http://help.osf.io/" target="_blank" rel="noreferrer">Guides</a> to learn about creating a project, or get inspiration from <a href="https://osf.io/explore/activity/#popularPublicProjects">popular public projects</a>.</p>',
        alternate_email_error: 'The email address has <b>NOT</b> been added to your account. Please log out and revisit the link in your email. Thank you.',
        remove_addon: 'Because the GitHub add-on for {{extra.category}} "{{extra.title}}" was authenticated by {{extra.user}}, authentication information has been deleted.',
        project_deleted: 'Project has been successfully deleted.',
        component_deleted: 'Component has been successfully deleted.',
        remove_self_contrib: 'You have removed yourself as a contributor from this project.',
    },
    dropzone_widget: {
        drop_files: 'Drop files here to upload',
        error_multiple_files: 'Cannot upload multiple files',
        error_directories: 'Cannot upload directories, applications, or packages',
    },
    join_osf: {
        header: 'Start managing your projects on OSF today.',
        pitch: 'Free and easy to use, OSF supports the entire research lifecycle: planning, execution, reporting, archiving, and discovery.',
        create_account: 'Create an account',
        learn_more: 'learn more',
        hide_message: 'Hide this message',
    },
    social: {
        twitter: 'Twitter',
        facebook: 'Facebook',
        google_group: 'Google Group',
        github: 'GitHub',
        google_plus: 'Google Plus',
        linkedin: 'LinkedIn',
    },
};
