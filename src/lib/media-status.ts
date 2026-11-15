import{places}from'./data';import{placePhotos}from'./photos';import tours from'./tours.json';
export const mediaStatus=places.map(p=>{const tour=tours.find(t=>t.placeId===p.id);const photo=!!placePhotos[p.id];const interiorEmbed=!!(tour&&'embedUrl'in tour&&tour.embedUrl&&'interiorVerified'in tour&&tour.interiorVerified);return{id:p.id,photo,interiorEmbed,state:photo&&interiorEmbed?'qualifies':'pending'}});
// Existing entries remain visible while being upgraded. New places must qualify before publication.
