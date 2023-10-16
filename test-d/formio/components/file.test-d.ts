import {expectAssignable, expectNotAssignable} from 'tsd';

import {FileComponentSchema, FileUploadData} from '../../../lib';

// Grabbed from test env file upload, URLs obfuscated.
const anUpload: FileUploadData = {
  url: 'http://localhost:8000/api/v2/submissions/files/54cc40ed-f1c4-4206-ba76-76d376ba4c3a',
  data: {
    url: 'http://localhost:8000/api/v2/submissions/files/54cc40ed-f1c4-4206-ba76-76d376ba4c3a',
    form: '',
    name: 'maykin_logo.png',
    size: 8725,
    baseUrl: 'http://localhost:8000/api/v2/',
    project: '',
  },
  name: 'maykin_logo-e0568045-45f6-46d1-909a-8895c5ee061e.png',
  size: 8725,
  type: 'image/png',
  storage: 'url',
  originalName: 'maykin_logo.png',
};

// minimal file component schema
expectAssignable<FileComponentSchema>({
  id: 'yejak',
  type: 'file',
  key: 'someFile',
  label: 'Attachment',
});

// Behaviour of single vs. multiple file uploads

const explicitSingleUpload: FileComponentSchema = {
  id: 'yejak',
  type: 'file',
  key: 'someFile',
  label: 'Attachment',
  multiple: false,
};
type ExplicitSingleUploadValue = (typeof explicitSingleUpload)['defaultValue'];
expectAssignable<ExplicitSingleUploadValue>([]);
expectAssignable<ExplicitSingleUploadValue>([anUpload]);
expectNotAssignable<ExplicitSingleUploadValue>([anUpload, anUpload]);

const explicitMultipleUpload: FileComponentSchema = {
  id: 'yejak',
  type: 'file',
  key: 'someFile',
  label: 'Attachment',
  multiple: true,
};
type ExplicitMultipleUploadValue = (typeof explicitMultipleUpload)['defaultValue'];
expectAssignable<ExplicitMultipleUploadValue>([]);
expectAssignable<ExplicitMultipleUploadValue>([anUpload]);
expectAssignable<ExplicitMultipleUploadValue>([anUpload, anUpload]);

const implicitSingleUpload: FileComponentSchema = {
  id: 'yejak',
  type: 'file',
  key: 'someFile',
  label: 'Attachment',
};
type ImplicitSingleUploadValue = (typeof implicitSingleUpload)['defaultValue'];
expectAssignable<ImplicitSingleUploadValue>([]);
expectAssignable<ImplicitSingleUploadValue>([anUpload]);
expectNotAssignable<ImplicitSingleUploadValue>([anUpload, anUpload]);
