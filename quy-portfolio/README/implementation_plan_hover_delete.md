# Implementation Plan: Image Hover Delete Functionality

This plan outlines the steps to add a hover effect to images in the Photography section, displaying a delete button that allows authorized users to remove images from Firestore.

## Objective
- Display a delete icon when hovering over an image in the `Photography` gallery.
- Only show the delete option if the user is logged in (Admin).
- When clicked, delete the corresponding document from Firestore and update the UI.

## Components Involved
1. `src/components/Photography.jsx`: Logic for deleting from Firestore and managing state.
2. `src/components/Masonry.jsx`: UI for the delete button and hover interaction.

## Step-by-Step Implementation

### 1. Update `Photography.jsx`

We need to add the deletion logic and pass it down to the `Masonry` component.

- **Imports**: Add `deleteDoc` and `doc` to the firebase imports.
- **Logic**: Create a `handleDeletePhoto` function.
    - This function should take a `photoId`.
    - It should confirm with the user (optional but recommended).
    - Call `deleteDoc(doc(db, 'photos', photoId))`.
    - Update the local `fetchedPhotos` state to remove the deleted item to avoid a full re-fetch.
- **Render**: Pass `onDelete={handleDeletePhoto}` and `currentUser={user}` to the `Masonry` component.

**Code Changes in `Photography.jsx`:**

```javascript
// ... existing imports
import { collection, getDocs, query, orderBy, addDoc, serverTimestamp, deleteDoc, doc } from 'firebase/firestore'; // Add deleteDoc, doc

// ... inside component
const handleDeletePhoto = async (photoId) => {
    if (window.confirm("Are you sure you want to delete this photo?")) {
        try {
            await deleteDoc(doc(db, 'photos', photoId));
            setFetchedPhotos(prev => prev.filter(photo => photo.id !== photoId));
        } catch (error) {
            console.error("Error deleting photo:", error);
            alert("Failed to delete photo.");
        }
    }
};

// ... inside render return > Masonry
<Masonry
    {...existingProps}
    onDelete={handleDeletePhoto}
    canDelete={!!user} // Only allow delete if user is logged in
/>
```

### 2. Update `Masonry.jsx`

We need to render the delete button and handle user interactions.

- **Imports**: Import `Trash2` (or `Trash`) from `lucide-react`.
- **Props**: Destructure `onDelete` and `canDelete` from props.
- **UI Structure**:
    - Inside the grid mapping, specifically for the image items (where `!item.node`):
    - Add a button element conditioned on `canDelete`.
    - Position it absolutely (e.g., top-right corner).
    - Use CSS classes for styling (red background, white icon) and visibility (opacity transition on hover).
    - We can use the existing `handleMouseEnter` / `handleMouseLeave` or simple CSS `group` and `group-hover` classes. Since the existing code uses GSAP for hover scales, adding a CSS-based hover for the button is compatible.

**Code Changes in `Masonry.jsx`:**

```javascript
import { Trash2 } from 'lucide-react';

// ... update component signature
const Masonry = ({
  // ... existing props
  onDelete,
  canDelete
}) => {
  // ...

  // Inside the map function rendering the items
  // Look for the `else` block of `item.node` check (lines ~205)

  // Suggestion: Add 'group' class to the wrapping div or the image div to handle hover easily
  return (
      <div
          // ... existing props
          // ensure 'group' class is present if using CSS hover
          className="absolute box-content group" 
      >
          {item.node ? (
              // ... node content
          ) : (
             <div className="..."> 
                 {/* Existing Image Div Content */}
                 
                 {/* NEW: Delete Button */}
                 {canDelete && (
                     <button
                         onClick={(e) => {
                             e.stopPropagation(); // Prevent opening the image
                             onDelete(item.id);
                         }}
                         className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-600 text-white rounded-full 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                         title="Delete Image"
                     >
                         <Trash2 size={16} />
                     </button>
                 )}

                 {/* Existing overlays */}
             </div>
          )}
      </div>
  )
}
```

## Summary of work
1.  **Modify `Photography.jsx`**: Implement `handleDeletePhoto` and pass props.
2.  **Modify `Masonry.jsx`**: Receive props, add `Trash` icon import, and render the delete button on hover.
