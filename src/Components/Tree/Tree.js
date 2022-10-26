
const Tree = (props,setCurrentObjectSelected) => {
    //console.log(props);
    //map all the items that are in props 

    //function that will be called when the user clicks on a file
    const handleClickObject = (event,name) => {
        //get the value of the file
        const file_name = name;

        //get all the nodes that are the parent of this event
        var nodes = []
        var element = event.target;
        while (element.parentNode) {
            nodes.push(element.parentNode);
            element = element.parentNode;
        }
        console.log(nodes);
        
        //loop over the nodes and console.log the inner html if the parent class has indentation 
        var all_parts = [];
        nodes.forEach((node) => {
            try {
                if (node.className.includes("indentation")) {
                    //split node id by _ and take the last element
                    all_parts.push(node.id);
                }
            } catch (error) {
                console.log(error);
            }
        })
        //reverse the all_parts array
        all_parts.reverse();
        // make new var that joins allparts by / and prepends ./
        var full_path = all_parts.join("/")+ file_name;
        //console.log(full_path);

        //set the current object selected to the file
        setCurrentObjectSelected(full_path);
    }


    return props.map((item, index) => {
        //if the item is an object, then it is a folder
        //console.log(item);
        if (typeof item.content === "object") {
            //get the name of the folder by getting the key of the object
            const folder_name = item.name;
            //console.log(folder_name);
            //get the content of the folder by getting the value of the object
            const folder_content = item.content;
            //console.log(folder_content);
            //perform recursion on the folder content
            return (
                <div key={index} id={`${folder_name}`} className={`indentation`}>
                    <p className={`indentation folder-sidebar`} onClick={() => handleClickObject(folder_name)}>{folder_name}</p>
                    {Tree(folder_content,setCurrentObjectSelected)}
                </div>
            )
        }
        //if the item is a string, then it is a file
        else if (typeof item === "string") {
            //get the name of the file
            const file_name = item;
            //console.log(file_name);
            return (
                <div key={index} className={`indentation file-sidebar`} onClick={(e) => handleClickObject(e,file_name)}>
                    <p>{file_name}</p>
                </div>
            )
        }
    });
};

export default Tree;