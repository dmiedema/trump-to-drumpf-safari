// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;

    v = v.replace(/\bDonald Trump\b/g, "Donald Drumpf");
	v = v.replace(/\bDonaldTrump\b/g, "DonaldDrumpf");
    v = v.replace(/\donald trump\b/g, "donald drumpf");
	v = v.replace(/\bdonaldtrump\b/g, "donalddrumpf");
  v = v.replace(/\bDonald J Trump\b/g, "Donald J Drumpf");
  v = v.replace(/\bDonald J. Trump\b/g, "Donald J. Drumpf");

	textNode.nodeValue = v;
}
