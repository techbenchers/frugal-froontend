import React from 'react';
import './FrugalBlogDisplay.css';
import {RouteComponentProps, withRouter} from "react-router";
import {DeltaToHTML} from "../FrugalEditor/DeltaTToHTML";

const post = {
    "ops": [{
        "attributes": {"bold": true},
        "insert": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et vulputate nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus pharetra neque nec sem congue, et volutpat lectus consectetur. Quisque molestie nunc ex, sed convallis dui faucibus nec. Praesent egestas, quam non porttitor volutpat, tortor felis accumsan diam, non efficitur odio nisi eu libero. Sed maximus convallis turpis id sodales. Praesent lacinia aliquam tortor. Suspendisse vulputate, odio sed bibendum lacinia, nisi turpis dapibus ex, a rhoncus dolor magna sit amet est. Aliquam ultrices ante nisi, eget scelerisque est dictum cursus. Cras mauris risus, consectetur non elit vitae, varius porttitor turpis. Quisque lacinia odio et odio luctus tincidunt. Pellentesque eget rhoncus lacus, non finibus nisi. Nullam tempus vitae augue ut mattis. Sed sit amet enim quis erat imperdiet vulputate non nec metus. In hac habitasse platea dictumst. Donec sollicitudin nibh odio, et feugiat lacus pulvinar et."
    }, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Ut dapibus lorem metus, ac euismod risus pretium in. Etiam at nisi facilisis, gravida orci et, egestas metus. Praesent tristique luctus eleifend. Suspendisse potenti. Sed quis tortor non nibh porttitor bibendum ac nec urna. Proin nulla velit, finibus sit amet vestibulum vel, congue a ante. In et nunc vehicula elit posuere mollis. Sed eu aliquam est. Nulla nec ex sed lacus placerat lacinia. Sed malesuada commodo ligula eu viverra. Pellentesque ac tortor sit amet urna finibus fringilla. In elementum tellus quis eros maximus vestibulum."}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Nunc volutpat tellus vel leo condimentum, blandit lacinia orci mattis. Praesent eu urna consequat, aliquet ex ut, interdum mauris. Vestibulum dui tellus, dapibus nec augue eget, egestas dignissim est. Nunc est ipsum, vestibulum eget congue sed, malesuada nec erat. Aenean eleifend arcu ac justo interdum congue. Vivamus vehicula rhoncus tortor eu volutpat. Mauris ornare magna eget mi malesuada, vel accumsan mauris dapibus. Praesent pretium facilisis neque id vehicula."}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Nullam aliquam lacinia nisi vehicula pretium. Donec luctus arcu quis elit aliquet, sed dapibus lacus aliquam. Etiam pulvinar ligula in maximus gravida. Fusce fermentum massa justo, et cursus nulla mollis ac. Quisque aliquet est quis tortor euismod placerat. Nam eu posuere nisl. Nam imperdiet dolor quam, in egestas purus molestie ac. Donec tristique id leo sed tristique. Integer cursus pharetra lorem ut molestie. Morbi et libero nisl. Maecenas ut felis egestas, volutpat metus nec, venenatis nunc. Sed a est ultricies, interdum neque efficitur, vehicula lorem. In sed erat sit amet ipsum convallis commodo eget ut eros. Curabitur et turpis vehicula, pulvinar nibh at, facilisis velit. In erat turpis, congue ut condimentum id, aliquet a justo."}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Curabitur id hendrerit mauris. Ut eleifend hendrerit accumsan. Mauris eget porta diam. Praesent et vehicula orci. Cras sodales porta erat non blandit. Sed non massa id elit rhoncus condimentum quis a lorem. Phasellus quis interdum nunc. Duis ultrices dapibus porta. In porta elementum laoreet. Donec ornare tortor a lobortis egestas. Nullam id accumsan enim. Maecenas pharetra placerat fringilla. Ut laoreet, velit non gravida gravida, urna nisl tincidunt augue, in imperdiet risus sem vitae ante. Quisque quis ligula eget nisi pulvinar tincidunt non sed erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sem et tellus cursus dapibus."}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Nam vitae urna gravida, blandit risus non, molestie urna. Cras tincidunt egestas lacus, et molestie nulla laoreet at. Nam ut pulvinar mauris. Nunc nec viverra nunc, et ullamcorper neque. Nunc ultricies urna quis erat sollicitudin, et dictum justo tristique. Phasellus feugiat lacus mattis semper facilisis. Suspendisse ut dolor ac nisl fringilla tempus. Nunc nec magna dictum, accumsan lectus ut, tristique justo. Curabitur accumsan nulla vel suscipit rhoncus."}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Mauris ullamcorper condimentum tristique. Donec molestie dolor a consequat dictum. Duis fringilla auctor maximus. Ut imperdiet ex nisi, vel fringilla elit molestie sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec id sem sed dui facilisis laoreet. Phasellus faucibus, tellus id consequat lacinia, dui erat dignissim lectus, id maximus dui diam vitae urna."}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Curabitur sit amet placerat risus, eu rhoncus lacus. Duis nisl ex, aliquet eu vestibulum at, cursus faucibus elit. Donec sed ipsum id neque malesuada iaculis. Curabitur bibendum mi lacus, ut ullamcorper diam tristique ac. Morbi consequat ac mi et ornare. Proin luctus nulla hendrerit justo ultricies, at luctus quam ornare. Duis pulvinar fermentum leo. Aliquam eget dui nec lorem tempor rutrum. Etiam risus massa, porta eu bibendum et, consequat eu tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean accumsan mauris id turpis finibus dapibus. Nulla feugiat enim id sapien bibendum mollis. Ut vulputate sapien tellus, non ornare nisl vulputate quis. Nam vestibulum porttitor eros, vitae faucibus enim placerat a."}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Duis bibendum ligula elit, sed pellentesque diam pretium eget. Pellentesque quis ex nunc. Aliquam eu turpis nec velit ultrices vehicula. Integer ac felis in dolor pulvinar viverra vitae ornare massa. Ut imperdiet, massa a auctor blandit, sem diam tincidunt justo, ornare facilisis dolor sapien quis sapien. Vestibulum congue pulvinar consequat. Donec tempus volutpat quam, id pretium orci varius vitae."}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Quisque maximus quam sed sapien ultrices, sit amet imperdiet turpis condimentum. Curabitur viverra risus eu orci dictum suscipit. Praesent egestas accumsan maximus. Vestibulum in mi eget lacus accumsan tempor. Donec et lorem sit amet mauris sodales gravida a id mauris. Mauris nec pulvinar metus, a sodales orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin feugiat ornare tincidunt. Morbi aliquet gravida ante eget ornare. Morbi id lorem augue. Sed dignissim velit ut vehicula mollis. Ut ultrices, sem et vulputate imperdiet, odio arcu scelerisque dolor, at sollicitudin felis libero et erat. Donec in odio non tellus euismod tempus."}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Duis in vestibulum enim. Duis pretium urna odio, quis congue mi dignissim eget. Cras sed dapibus lorem, sit amet hendrerit arcu. Praesent at eros tortor. Quisque gravida lacus lacus, nec dignissim dui dignissim eget. Donec fermentum egestas dolor in sodales. Nulla ac ultrices turpis. In finibus at mauris vitae ornare. Aliquam ultrices magna faucibus nulla iaculis, volutpat pretium augue semper. In quis ultrices diam. Duis ultrices est lacus, quis lacinia dui lobortis sed. Morbi varius libero sem, at porta erat placerat eu. Sed et nunc ante. Mauris semper mollis felis sed posuere."}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "Morbi a sem orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras eleifend efficitur libero id egestas. Curabitur non convallis elit, vel congue turpis. Int"}, {
        "attributes": {"align": "justify"},
        "insert": "\n"
    }, {"insert": "\n"}]
};


export interface FrugalBlogDisplayProps extends RouteComponentProps {
}

export interface FrugalBlogDisplayState {

}


class FrugalBlogDisplay extends React.PureComponent<FrugalBlogDisplayProps, FrugalBlogDisplayState> {

    render() {
        let postDelta = JSON.parse(JSON.stringify(post));
        let postHTML = DeltaToHTML.deltoToHTML(postDelta);
        return (
            <>
                <p dangerouslySetInnerHTML={{__html: postHTML}}/>
                <button onClick={() => {
                    this.props.history.push(this.props.location.pathname + '/edit');
                }}>Edit</button>

            </>
        );
    }

}

export default withRouter(FrugalBlogDisplay);