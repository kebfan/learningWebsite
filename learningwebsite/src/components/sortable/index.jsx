import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ className, style, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props['data-row-key'],
  });

  const rowStyle = {
    ...style,
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <tr
      ref={setNodeRef}
      style={rowStyle}
      {...attributes}
      {...listeners}
      {...props}
    >
      {React.Children.map(props.children, (child, index) => {
        if (index === 0) {
          return React.cloneElement(child, {
            ...child.props,
            ...listeners, // Add listeners to the first cell (drag handle)
          });
        }
        return child;
      })}
    </tr>
  );
};

export default SortableItem;
