const smartgrid = require('smart-grid'); 

smartgrid('./app/less/lib', {
    mobileFirst: false,
    filename: "smart-grid",
    columns: 12,
    offset: "30px",
    container: {
        maxWidth: "1210px",
        fields:"5px"
    },
    breakPoints: {
        md: {
            width: "1080px"
            
        },
        sm: {
            width: "785px"
        },
        xs: {
            width: "576px"
        },
        xs_dop:{
            width: "500px"
        },
        xxs: {
            width: "380px"
        }
    }
});

// smartgrid('.');
	
	

/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */