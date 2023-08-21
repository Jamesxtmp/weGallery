export default function urlToPrevImage ( originalURL ) {
  const transformationString = "c_thumb,g_faces,h_80";
  const parts = originalURL.split( "/" );

  // Insert the transformation string right before the version/public ID segment
  parts.splice( -2, 0, transformationString );

  const transformedURL = parts.join( "/" );
  return transformedURL;
}