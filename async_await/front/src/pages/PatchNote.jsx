import React, { useEffect, useState, useCallback } from 'react';
import { callApi } from '../apis';
import { PatchNoteStyle } from './style/PatchNote.style';

const PatchNote = ({ match }) => {
  const [patchNote, setPatchNote] = useState('');

  const fetchList = useCallback(async () => {
    const response = await callApi({
      url: `/${match.params.name}/${match.params.id}`,
    });
    setPatchNote(response);
  }, [match.params.name, match.params.id]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <PatchNoteStyle name={match.params.name}>
      <div>{patchNote.title}</div>
      {patchNote && (
        <div dangerouslySetInnerHTML={{ __html: patchNote.content }}></div>
      )}
    </PatchNoteStyle>
  );
};

export default PatchNote;
